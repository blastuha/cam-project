import { userApi } from '@utils/api/api';

export const editEmployee = async ({
  userId,
  first_name,
  last_name,
  is_active,
  description,
  image,
}: {
  userId: string;
  first_name: string | null;
  last_name: string | null;
  is_active: boolean;
  description: string | null;
  image: string | null;
}) => {
  try {
    const userSchema = { first_name, last_name, is_active, description, image };
    const response = await userApi.update(userId, userSchema);
    return response.data;
  } catch (err) {
    console.error('editEmployee:', err);
  }
};
