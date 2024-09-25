import Yup from "yup";
import { CommonValidation } from "./common.validation";
import { message } from "../constants";

const createSchema = Yup.object({
  name: CommonValidation.requiredString(message.requiredMessage("Tên")),
  email: CommonValidation.email,
  password: CommonValidation.password.required(
    message.requiredMessage("Mật khẩu")
  ),
  gender: CommonValidation.requiredString(message.requiredMessage("Giới tính")),
  phone_number: CommonValidation.phone_number,
});

export const userValidation = {
  createSchema,
};
