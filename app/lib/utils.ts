import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ZodError, ZodSchema } from 'zod';
import { siteConfig } from '~/config/site';
import type { $TSFixME } from '~/types';
import type { ActionErrors } from '~/types/validation-action';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function validationAction<ActionInput>({
  request,
  schema,
}: {
  request: Request;
  schema: ZodSchema;
}) {
  const formData = await request.formData();
  const body: Record<string, $TSFixME> = {};

  for (const key of formData.keys()) {
    // INFO: cheap trick to direct check key name instead of field type
    // TODO: check isTypeArray using zodSchema
    const values = formData.getAll(key);
    body[key] =
      values.length > 1
        ? values
        : key === 'courseLookingFor'
        ? [values[0]]
        : values[0];
  }

  try {
    const data = schema.parse(body);
    return { data, errors: null };
  } catch (e) {
    const _errors = e as ZodError<ActionInput>;
    const errors = _errors.issues.reduce(
      (acc: ActionErrors<ActionInput>, error) => {
        const key = error.path[0] as keyof ActionInput;
        acc[key] = error.message;
        return acc;
      },
      {}
    );
    return {
      data: body,
      errors,
    };
  }
}

export const postFormData = async (formData: $TSFixME, toast: $TSFixME) => {
  try {
    // Encode form data in x-www-form-urlencoded format
    const urlSearchParams = new URLSearchParams();
    for (const key in formData) {
      urlSearchParams.append(key, formData[key]);
    }

    const response = await fetch(siteConfig.FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded  ',
      },
      body: urlSearchParams.toString(),
    });
    await response.json();
  } catch (postFormDataError: $TSFixME) {
    console.error({ postFormDataError });
    toast({
      title: postFormDataError?.message ?? 'Something Went Wrong',
    });
  }
};
