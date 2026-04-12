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

export type FormTypes = 'prayer' | 'volunteer' | 'general' | null;
export interface ConnectFormData {
  name?: string;
  email?: string;
  contact_number: string;
  message?: string;
  type: FormTypes;

}