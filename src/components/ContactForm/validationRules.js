export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Masukan nama";
  }
  if (!values.email) {
    errors.email = "Email wajib diisi";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email tidak valid";
  }
  if (!values.message) {
    errors.message = "Masukan pertanyaan kamu";
  }
  return errors;
}
