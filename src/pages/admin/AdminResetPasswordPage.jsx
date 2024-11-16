import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminSidebar } from "@/components/AdminWebSection";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export function AdminResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [valid, setValid] = useState({
    password: true,
    newPassword: true,
    confirmNewPassword: true,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, newPassword, confirmNewPassword } = formData;

    const isValidPassword = password.trim() !== "";
    const isValidNewPassword = newPassword.trim() !== "";
    const isValidConfirmPassword =
      confirmNewPassword.trim() !== "" && confirmNewPassword === newPassword;

    setValid({
      password: isValidPassword,
      newPassword: isValidNewPassword,
      confirmNewPassword: isValidConfirmPassword,
    });

    if (isValidPassword && isValidNewPassword && isValidConfirmPassword) {
      setIsDialogOpen(true);
    }
  };

  const handleResetPassword = () => {

    toast.custom((t) => (
      <div className="bg-green-500 text-white p-4 rounded-sm flex justify-between items-start">
        <div>
          <h2 className="font-bold text-lg mb-1">Reset!</h2>
          <p className="text-sm">
            Password reset successful. You can now log in with your new password.
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="text-white hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>
    ));
    setIsDialogOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Reset Password</h2>
          <Button className="px-8 py-2 rounded-full" onClick={handleSubmit}>
            Reset Password
          </Button>
        </div>

        <div className="space-y-7 max-w-md">
          <InputField
            id="current-password"
            label="Current password"
            value={formData.password}
            onChange={handleChange}
            isError={!valid.password}
            errorMessage="This field is required"
            type="password"
          />
          <InputField
            id="new-password"
            label="New password"
            value={formData.newPassword}
            onChange={handleChange}
            isError={!valid.newPassword}
            errorMessage="Password must be at least 8 characters"
            type="password"
          />
          <InputField
            id="confirm-new-password"
            label="Confirm new password"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            isError={!valid.confirmNewPassword}
            errorMessage="Passwords do not match"
            type="password"
          />
        </div>
      </main>

      <ResetPasswordModal
        dialogState={isDialogOpen}
        setDialogState={setIsDialogOpen}
        resetFunction={handleResetPassword}
      />
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  onChange,
  isError,
  errorMessage,
  type,
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground ${isError ? "border-red-500" : ""}`}
      />
      {isError && <p className="text-red-500 text-xs absolute mt-1">{errorMessage}</p>}
    </div>
  );
}

function ResetPasswordModal({ dialogState, setDialogState, resetFunction }) {
  return (
    <AlertDialog open={dialogState} onOpenChange={setDialogState}>
      <AlertDialogContent className="bg-white rounded-md pt-16 pb-6 max-w-[22rem] sm:max-w-md flex flex-col items-center">
        <AlertDialogTitle className="text-3xl font-semibold pb-2 text-center">
          Reset password
        </AlertDialogTitle>
        <AlertDialogDescription className="flex flex-row mb-2 justify-center font-medium text-center text-muted-foreground">
          Do you want to reset your password?
        </AlertDialogDescription>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => setDialogState(false)}
            className="bg-background px-10 py-4 rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={resetFunction}
            className="rounded-full text-white bg-foreground hover:bg-muted-foreground transition-colors py-4 text-lg px-10"
          >
            Reset
          </button>
        </div>
        <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none">
          <X className="h-6 w-6" />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
