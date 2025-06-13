"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Control } from "react-hook-form";

interface PasswordFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const PasswordField = ({
  control,
  name,
  label,
  placeholder,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-700">{label}</FormLabel>
          <div className="relative">
            <FormControl>
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                className="pr-10 h-12 bg-white border-2 border-gray-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-black"
              />
            </FormControl>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-orange-500 hover:bg-transparent"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          <FormMessage className="text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default PasswordField;
