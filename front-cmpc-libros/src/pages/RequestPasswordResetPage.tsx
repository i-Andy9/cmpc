import React from "react";
import { RequestPasswordResetForm } from "../components/auth/RequestPasswordResetForm";

export const RequestPasswordResetPage: React.FC = () => (
  <div style={{ maxWidth: 400, margin: "2rem auto" }}>
    <RequestPasswordResetForm />
  </div>
);
