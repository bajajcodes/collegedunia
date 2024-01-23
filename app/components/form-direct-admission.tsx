import { useFetcher } from '@remix-run/react';
import React, { useRef } from 'react';
import type * as z from 'zod';
import type { FormDirectAdmissionSchema } from '~/data/schema';
import { cn, postFormData } from '~/lib/utils';
import type { ActionErrors } from '~/types/validation-action';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { FormItem, FormLabel, FormDescription, FormMessage } from './form';
import { Input } from './ui/input';
import { itemsCourseLookingFor, itemsMajorSubject } from '~/data/form.data';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export type FormDirectAdmissionInput = z.infer<
  typeof FormDirectAdmissionSchema
>;

export interface FormDirectAdmissionActionData {
  errors?: ActionErrors<FormDirectAdmissionInput>;
  data?: FormDirectAdmissionInput;
}

const formDirectAdmissionDefaultValues: Partial<FormDirectAdmissionInput> = {
  courseLookingFor: [],
  name: '',
  phoneNumber: '',
  fatherName: '',
  fatherPhoneNumber: '',
  email: '',
  collegePreferedLocation: '',
  preferedCollege: '',
  tenthScore: '',
  twelfthScore: '',
  yearOfPassing: '',
  // majorSubject: 'pcm',
};

export function FormDirectAdmission({
  className,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const fetcher = useFetcher<FormDirectAdmissionActionData>();

  const actionData = fetcher.data;
  const isSubmitting = fetcher.state === 'submitting';

  React.useEffect(() => {
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
      <div className="flex flex-col md:flex-row gap-4">
        <FormItem>
          <FormLabel htmlFor="name" error={actionData?.errors?.name}>
            Name
          </FormLabel>
          <Input
            placeholder="Shubham Bajaj"
            name="name"
            id="name"
            defaultValue={formDirectAdmissionDefaultValues.name}
          />
          <FormDescription>
            This is your public display name. It has to be your real name.
          </FormDescription>
          <FormMessage>{actionData?.errors?.name}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel
            htmlFor="phoneNumber"
            error={actionData?.errors?.phoneNumber}
          >
            Phone
          </FormLabel>
          <Input
            placeholder="89500XXXXX"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={formDirectAdmissionDefaultValues.phoneNumber}
          />
          <FormDescription>
            This is your public display name. It has to be your real name.
          </FormDescription>
          <FormMessage>{actionData?.errors?.phoneNumber}</FormMessage>
        </FormItem>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <FormItem>
          <FormLabel
            htmlFor="fatherName"
            error={actionData?.errors?.fatherName}
          >
            Father Name
          </FormLabel>
          <Input
            placeholder="Shubham Bajaj"
            name="fatherName"
            id="fatherName"
            defaultValue={formDirectAdmissionDefaultValues.fatherName}
          />
          <FormDescription>
            This is your public display name. It has to be your real name.
          </FormDescription>
          <FormMessage>{actionData?.errors?.fatherName}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel
            htmlFor="fatherPhoneNumber"
            error={actionData?.errors?.fatherPhoneNumber}
          >
            Father Mobile Number
          </FormLabel>
          <Input
            placeholder="89500XXXXX"
            name="fatherPhoneNumber"
            id="fatherPhoneNumber"
            defaultValue={formDirectAdmissionDefaultValues.fatherPhoneNumber}
          />
          <FormDescription>
            This is your public display name. It has to be your real name.
          </FormDescription>
          <FormMessage>{actionData?.errors?.fatherPhoneNumber}</FormMessage>
        </FormItem>
      </div>

      <FormItem className={'flex flex-col w-full max-w-sm  gap-1.5'}>
        <FormLabel error={actionData?.errors?.email} htmlFor="email">
          Email
        </FormLabel>
        <Input
          placeholder="shubham@gmail.com"
          name="email"
          id="email"
          defaultValue={formDirectAdmissionDefaultValues.email}
        />
        <FormDescription>
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </FormDescription>
        <FormMessage>{actionData?.errors?.email}</FormMessage>
      </FormItem>

      <FormItem>
        <div className="mb-4">
          <FormLabel htmlFor="" error={actionData?.errors?.courseLookingFor}>
            Course Looking For
          </FormLabel>
          <FormDescription className="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </FormDescription>
        </div>
        <div className="grid gap-4 md:grid-flow-row md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
          {itemsCourseLookingFor.map((item) => (
            <FormItem
              key={item.id}
              className="flex flex-row items-start space-x-3 space-y-0"
            >
              <Checkbox
                name="courseLookingFor"
                id={item.id}
                value={item.id}
                defaultChecked={formDirectAdmissionDefaultValues.courseLookingFor?.includes(
                  item.id
                )}
              />
              <FormLabel className="font-normal" htmlFor={item.id}>
                {item.label}
              </FormLabel>
            </FormItem>
          ))}
        </div>
        <FormMessage>{actionData?.errors?.courseLookingFor}</FormMessage>
      </FormItem>

      <FormItem>
        <FormLabel
          htmlFor="collegePreferedLocation"
          error={actionData?.errors?.collegePreferedLocation}
        >
          College Prefered Location
        </FormLabel>
        <Input
          placeholder="Pune"
          name="collegePreferedLocation"
          id="collegePreferedLocation"
          defaultValue={
            formDirectAdmissionDefaultValues.collegePreferedLocation
          }
        />
        <FormDescription>
          This is your collegePreferedLocation. It has to be your
          collegePreferedLocation.
        </FormDescription>
        <FormMessage>{actionData?.errors?.collegePreferedLocation}</FormMessage>
      </FormItem>

      <FormItem>
        <FormLabel
          htmlFor="preferedCollege"
          error={actionData?.errors?.preferedCollege}
        >
          Prefered College
        </FormLabel>
        <Input
          placeholder="89500XXXXX"
          name="preferedCollege"
          id="preferedCollege"
          defaultValue={formDirectAdmissionDefaultValues.preferedCollege}
        />
        <FormDescription>
          This is your public display name. It has to be your real name.
        </FormDescription>
        <FormMessage>{actionData?.errors?.preferedCollege}</FormMessage>
      </FormItem>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <FormItem>
            <FormLabel
              htmlFor="tenthScore"
              error={actionData?.errors?.tenthScore}
            >
              10th Score
            </FormLabel>
            <Input
              placeholder="81"
              name="tenthScore"
              id="tenthScore"
              defaultValue={formDirectAdmissionDefaultValues.tenthScore}
            />
            <FormDescription>
              This is your public display name. It has to be your real name.
            </FormDescription>
            <FormMessage>{actionData?.errors?.tenthScore}</FormMessage>
          </FormItem>
          <FormItem>
            <FormLabel
              htmlFor="yearOfPassing"
              error={actionData?.errors?.yearOfPassing}
            >
              Year Of Passing(10th)
            </FormLabel>
            <Input
              placeholder="2023"
              name="yearOfPassing"
              id="yearOfPassing"
              defaultValue={formDirectAdmissionDefaultValues.yearOfPassing}
            />
            <FormDescription>
              This is your public display name. It has to be your real name.
            </FormDescription>
            <FormMessage>{actionData?.errors?.yearOfPassing}</FormMessage>
          </FormItem>
        </div>

        <div className="flex flex-col gap-4">
          <FormItem>
            <FormLabel
              htmlFor="twelfthScore"
              error={actionData?.errors?.twelfthScore}
            >
              12th Score
            </FormLabel>
            <Input
              placeholder="91"
              name="twelfthScore"
              id="twelfthScore"
              defaultValue={formDirectAdmissionDefaultValues.twelfthScore}
            />
            <FormDescription>
              This is your public display name. It has to be your real name.
            </FormDescription>
            <FormMessage>{actionData?.errors?.twelfthScore}</FormMessage>
          </FormItem>

          {/* TODO: Clear majorSubject field, post submit action */}
          <FormItem>
            <FormLabel
              htmlFor="majorSubject"
              error={actionData?.errors?.majorSubject}
            >
              Major Subject
            </FormLabel>
            <Select
              defaultValue={formDirectAdmissionDefaultValues.majorSubject}
              name="majorSubject"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    formDirectAdmissionDefaultValues.majorSubject ||
                    'Select a Major Subject'
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Major Subject</SelectLabel>
                  {itemsMajorSubject.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormDescription>
              This is your public display name. It has to be your real name.
            </FormDescription>
            <FormMessage>{actionData?.errors?.majorSubject}</FormMessage>
          </FormItem>
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </fetcher.Form>
  );
}
