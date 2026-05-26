import {  Form, useActionData } from "react-router-dom";
import { Button } from "./components/ui/button";
import {
  Field,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "./components/ui/input";


const RegistrationForm = () => {
  const actionData=useActionData();
  return   ( <>
   < Form method="post">
      <Field>
      <FieldLabel htmlFor="username">UserName</FieldLabel>
      <Input id="username" type="text" placeholder="Enter UserName" name="username" />
      <span className="text-red-500">{actionData?.errors?.username}</span>

       <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" placeholder="Enter Password"  name="password"/>
       <span className="text-red-500">{actionData?.errors?.password}</span>

      <Button type="submit" >Submit</Button>
    </Field>
    </Form>


   {/* conditional rendering : */}
   {actionData?.success && (
        <div>
          <h2>{actionData.message}</h2>

          <p>Username: {actionData.username}</p>
          <p>Password: {actionData.password}</p>
        </div>
      )}
    </>
  )
}
export default RegistrationForm;