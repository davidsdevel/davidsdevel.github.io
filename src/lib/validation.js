import { z } from "zod/v4";

const emailSchema = z.email();

export function validateEmail(email) {
  if (!email) return { valid: false, error: 'El correo es requerido' };

  const result = emailSchema.safeParse(email);

  if (!result.success) return { valid: false, error: 'El correo no es válido' };

  return { valid: true };
}
