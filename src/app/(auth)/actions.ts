"use server";

import { LoginFormSchema, SignupFormSchema } from "@/lib/definitions";
import { FormState } from "@/types";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  // const { name, email, password } = validatedFields.data;

  // const hashedPassword = await bcrypt.hash(password, 10);

  // TODO: Call the API to create the user

  // const data = await db
  //   .insert(users)
  //   .values({
  //     name,
  //     email,
  //     password: hashedPassword,
  //   })
  //   .returning({ id: users.id })

  // const user = data[0]

  // if (!user) {
  //   return {
  //     message: 'An error occurred while creating your account.',
  //   }
  // }

  // TODO: Create a session for the user

  redirect("/");
}

export async function login(state: FormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  // TODO: Call the API to authenticate the user
}

export async function logout() {
  // TODO: Destroy the session

  redirect("/login");
}
