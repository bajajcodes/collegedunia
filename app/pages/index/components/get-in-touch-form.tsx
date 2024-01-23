// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import * as z from 'zod';
import { toast } from '../../../components/ui/use-toast';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';
import { useFetcher } from '@remix-run/react';
import { Label } from '~/components/ui/label';
import type { GetInTouchFormSchema } from '~/data/schema';
import type { ActionErrors } from '~/types/validation-action';
import { cn, postFormData } from '~/lib/utils';
import { useEffect, useRef } from 'react';
import { itemsCourseLookingFor } from '~/data/form.data';

export type GetInTouchFormInput = z.infer<typeof GetInTouchFormSchema>;

export interface GetInTouchFormActionData {
  errors?: ActionErrors<GetInTouchFormInput>;
  data?: GetInTouchFormInput;
}

const getInTouchFormDefaultValues: GetInTouchFormInput = {
  courseLookingFor: [],
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export function GetInTouchForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const fetcher = useFetcher<GetInTouchFormActionData>();

  const actionData = fetcher.data;

  const isSubmitting = fetcher.state === 'submitting';

  useEffect(() => {
    const isSubmitted = Boolean(fetcher.data?.data && !fetcher.data.errors);
    if (!isSubmitted || fetcher.state !== 'idle') return;
    postFormData(fetcher.data?.data, toast);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(fetcher.data?.data, null, 2)}
          </code>
        </pre>
      ),
    });
    formRef.current?.reset();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher.state]);

  return (
    <fetcher.Form
      {...props}
      method="post"
      className={cn('space-y-8', className)}
      ref={formRef}
    >
      <div className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <Label
          className={cn(
            'flex flex-col w-full max-w-sm  gap-1.5',
            actionData?.errors?.name && 'text-destructive'
          )}
          htmlFor="name"
        >
          Name
        </Label>
        <Input
          placeholder="Shubham Bajaj"
          name="name"
          id="name"
          defaultValue={getInTouchFormDefaultValues.name}
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
        {actionData?.errors?.name ? (
          <p className={'text-sm font-medium text-destructive'}>
            {actionData.errors.name}
          </p>
        ) : null}
      </div>

      <div className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <Label
          className={cn(actionData?.errors?.phoneNumber && 'text-destructive')}
          htmlFor="phoneNumber"
        >
          Phone Number
        </Label>
        <Input
          placeholder="89xxxxxxxx"
          name="phoneNumber"
          id="phoneNumber"
          defaultValue={getInTouchFormDefaultValues.phoneNumber}
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
        {actionData?.errors?.phoneNumber ? (
          <p className={'text-sm font-medium text-destructive'}>
            {actionData.errors.phoneNumber}
          </p>
        ) : null}
      </div>

      <div className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <Label
          className={cn(actionData?.errors?.email && 'text-destructive')}
          htmlFor="email"
        >
          Email
        </Label>
        <Input
          placeholder="shubham@gmail.com"
          name="email"
          id="email"
          defaultValue={getInTouchFormDefaultValues.email}
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
        {actionData?.errors?.email ? (
          <p className={'text-sm font-medium text-destructive'}>
            {actionData.errors.email}
          </p>
        ) : null}
      </div>

      <div className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <div className="mb-4">
          <Label
            className={cn(
              'text-base',
              actionData?.errors?.courseLookingFor && 'text-destructive'
            )}
          >
            Course Looking For
          </Label>
          <p className="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        {itemsCourseLookingFor.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-start space-x-3 space-y-0"
          >
            <Checkbox
              name="courseLookingFor"
              id={item.id}
              value={item.id}
              defaultChecked={getInTouchFormDefaultValues.courseLookingFor.includes(
                item.id
              )}
            />
            <Label className="font-normal" htmlFor={item.id}>
              {item.label}
            </Label>
          </div>
        ))}
        {actionData?.errors?.courseLookingFor ? (
          <p className={'text-sm font-medium text-destructive'}>
            {actionData.errors.courseLookingFor}
          </p>
        ) : null}
      </div>

      <div className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <Label
          className={cn(actionData?.errors?.message && 'text-destructive')}
          htmlFor="message"
        >
          Message
        </Label>
        <Textarea
          placeholder="Tell us a little bit about yourself"
          className="resize-none"
          name="message"
          id="message"
          defaultValue={getInTouchFormDefaultValues.message}
        />
        <p className="text-sm text-muted-foreground">
          You can <span>@mention</span> other users and organizations to link to
          them.
        </p>
        {actionData?.errors?.message ? (
          <p className={'text-sm font-medium text-destructive'}>
            {actionData.errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Contact
      </Button>
    </fetcher.Form>
  );
}
