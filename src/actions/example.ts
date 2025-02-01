'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { parseWithZod } from '@conform-to/zod';

import db from '@/db';
import { users, usersInsertSchema } from '@/db/schema';

export async function createUser(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: usersInsertSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const { name, email } = submission.value;

  // ...

  await db.insert(users).values({ name, email });

  revalidatePath('/');
  redirect('/');
}
