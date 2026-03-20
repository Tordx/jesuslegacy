/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

import { toast } from "react-toastify";

const ToastContent = ({ title, description }: {title: string; description: string}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {title && <strong style={{ marginBottom: 4 }}>{title}</strong>}
    <span>{description}</span>
  </div>
);

const toaster = {
  success: (title: string, description: string) =>
    toast.success(<ToastContent title={title} description={description} />),
  error: (title: string, description: string) =>
    toast.error(<ToastContent title={title} description={description} />),
  info: (title: string, description: string) =>
    toast.info(<ToastContent title={title} description={description} />),
  warning: (title: string, description: string) =>
    toast.warn(<ToastContent title={title} description={description} />),
};

export default toaster;