import { useField } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import styles from "../../pages/login/login.module.css";

export const CustomTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <FormGroup>
        {label && (
          <Label htmlFor={props.id || props.name} className={styles.textInput}>
            {label} {props.require && <span className="text-danger">*</span>}
          </Label>
        )}
        <Input
          className={styles.textInput}
          {...field}
          {...props}
          invalid={meta.touched && meta.error}
        />
        {meta.touched && meta.error ? (
          <FormFeedback>{meta.error}</FormFeedback>
        ) : null}
      </FormGroup>
    </>
  );
};
