import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import {
  FormDirectAdmission,
  type FormDirectAdmissionInput,
} from '~/components/form-direct-admission';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { siteConfig } from '~/config/site';
import { FormDirectAdmissionSchema } from '~/data/schema';
import { validationAction } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [{ title: 'Direct Admission' }];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { data, errors } = await validationAction<FormDirectAdmissionInput>({
    request,
    schema: FormDirectAdmissionSchema,
  });
  if (errors) {
    return json({ errors });
  }
  return json({ data });
};

export default function DirectAdmission() {
  return (
    <div className="container relative mb-8 flex flex-col items-center justify-center gap-8">
      <PageHeader className="pb-8 items-center">
        <p className="capitalize font-bold text-orange-500">
          DON’T SETTLE FOR LESS
        </p>
        <PageHeaderHeading className="capitalize text-center">
          Free Admission Consultation
        </PageHeaderHeading>
        <PageHeaderDescription className="leading-8 text-center">
          <span className="leading-6">
            {`${siteConfig.name} Pvt. Ltd. is a company dedicated to education consultants for personalized guidance.`}
          </span>
          &nbsp;
          <span className="leading-6">
            We specialize in providing expert guidance with a rich legacy of 14
            years of experience. Our focus areas include MBA consultation,
            engineering consultation, and medical admission consultation. We
            understand that navigating the educational landscape can be complex,
            and that's where our experienced education consultants come in to
            simplify the process and guide you towards success.
          </span>
        </PageHeaderDescription>
      </PageHeader>

      <h2 className="text-xl leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-8 text-center">
        Fill in the following form with your details to apply for direct
        admissions to your Dream College.
      </h2>

      <FormDirectAdmission />
    </div>
  );
}
