import { userApi } from '@utils/api/api';

export const createEmployee = async ({
  firstName,
  lastName,
  isActive,
  description,
  image,
}: {
  firstName: string | null;
  lastName: string | null;
  isActive: boolean;
  description: string | null;
  image: string | null;
}) => {
  try {
    const newEmployeeSchema = {
      first_name: firstName,
      last_name: lastName,
      is_active: isActive,
      description: description,
      image: image,
    };
    const response = await userApi.create(newEmployeeSchema);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
