/**
 * File: ClickScroll.ts
 * Project: next-enterprise
 * File Created: Monday February 12th, 2024 | 9:50:33 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday February 12th, 2024 | 9:50:33 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

export const scrollToDiv = (divId: string): void => {
  const element = document.getElementById(divId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
