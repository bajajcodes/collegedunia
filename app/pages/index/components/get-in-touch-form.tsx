// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import * as z from "zod";
// import { toast } from "../../../components/ui/use-toast";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { useFetcher } from "@remix-run/react";
import { Label } from "~/components/ui/label";
import type { GetInTouchFormSchema } from "~/data/schema";
import type { ActionErrors } from "~/types/validation-action";
import { cn } from "~/lib/utils";

const items = [
  { label: "Engineering", id: "engineering" },
  { label: "Medical", id: "medical" },
  { label: "BA LLB/ LLM", id: "ballb/llm" },
  { label: "MBA/PGDM/MMS", id: "mba/pgdm/mms" },
  { label: "BBA/BBM", id: "bba/bbm" },
  { label: "B Com./ M Com.", id: "bcom./mcom." },
  { label: "B Pharma / M Pharma", id: "bpharma/mpharma" },
  { label: "BCA/MCA/BSc./MSc.", id: "bca/mca/bsc./msc." },
  { label: "Other", id: "other" },
];

export type GetInTouchFormInput = z.infer<typeof GetInTouchFormSchema>;

export interface GetInTouchFormActionData {
  errors?: ActionErrors<GetInTouchFormInput>;
  data?: GetInTouchFormInput;
}

const getInTouchFormDefaultValues: GetInTouchFormInput = {
  courseLookingFor: [],
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export function GetInTouchForm() {
  const fetcher = useFetcher<GetInTouchFormActionData>();
  const actionData = fetcher.data;
  const isSubmitting = fetcher.state !== "idle";

  // TODO: reset form on successful Submit
  // TODO: ack success form subission
  return (
    <fetcher.Form method="post" className="space-y-8">
      <div className={"flex flex-col w-full max-w-sm  gap-1.5"}>
        <Label
          className={cn(
            "flex flex-col w-full max-w-sm  gap-1.5",
            actionData?.errors?.name && "text-destructive"
          )}
        >
          Name
        </Label>
        <Input
          placeholder="Shubham Bajaj"
          name="name"
          defaultValue={getInTouchFormDefaultValues.name}
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
        {actionData?.errors?.name ? (
          <p className={"text-sm font-medium text-destructive"}>
            {actionData.errors.name}
          </p>
        ) : null}
      </div>

      <div className={"flex flex-col w-full max-w-sm  gap-1.5"}>
        <Label
          className={cn(actionData?.errors?.phoneNumber && "text-destructive")}
        >
          Phone Number
        </Label>
        <Input
          placeholder="89xxxxxxxx"
          name="phoneNumber"
          defaultValue={getInTouchFormDefaultValues.phoneNumber}
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
        {actionData?.errors?.phoneNumber ? (
          <p className={"text-sm font-medium text-destructive"}>
            {actionData.errors.phoneNumber}
          </p>
        ) : null}
      </div>

      <div className={"flex flex-col w-full max-w-sm  gap-1.5"}>
        <Label className={cn(actionData?.errors?.email && "text-destructive")}>
          Email
        </Label>
        <Input
          placeholder="shubham@gmail.com"
          name="email"
          defaultValue={getInTouchFormDefaultValues.email}
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
        {actionData?.errors?.email ? (
          <p className={"text-sm font-medium text-destructive"}>
            {actionData.errors.email}
          </p>
        ) : null}
      </div>

      <div className={"flex flex-col w-full max-w-sm  gap-1.5"}>
        <div className="mb-4">
          <Label
            className={cn(
              "text-base",
              actionData?.errors?.courseLookingFor && "text-destructive"
            )}
          >
            Course Looking For
          </Label>
          <p className="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-start space-x-3 space-y-0"
          >
            <Checkbox
              name="courseLookingFor"
              defaultChecked={getInTouchFormDefaultValues.courseLookingFor.includes(
                item.id
              )}
            />
            <span className="font-normal">{item.label}</span>
          </div>
        ))}
        {actionData?.errors?.courseLookingFor ? (
          <p className={"text-sm font-medium text-destructive"}>
            {actionData.errors.courseLookingFor}
          </p>
        ) : null}
      </div>

      <div className={"flex flex-col w-full max-w-sm  gap-1.5"}>
        <Label
          className={cn(actionData?.errors?.message && "text-destructive")}
        >
          Message
        </Label>
        <Textarea
          placeholder="Tell us a little bit about yourself"
          className="resize-none"
          name="message"
          defaultValue={getInTouchFormDefaultValues.message}
        />
        <p className="text-sm text-muted-foreground">
          You can <span>@mention</span> other users and organizations to link to
          them.
        </p>
        {actionData?.errors?.message ? (
          <p className={"text-sm font-medium text-destructive"}>
            {actionData.errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Contacting..." : "Contact"}
      </Button>
    </fetcher.Form>
  );
}
