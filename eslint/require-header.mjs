const requireHeader = {
  meta: {
    type: "layout",
    docs: {
      description: "Require project header at top of file",
    },
    fixable: "code",
  },

  create(context) {
    return {
      Program(node) {
        const sourceCode = context.sourceCode;
        const text = sourceCode.getText();

        const HEADER = `/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */`;

        if (!text.startsWith(HEADER)) {
          context.report({
            node,
            message: "Missing required project header",
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], HEADER + "\n\n");
            },
          });
        }
      },
    };
  },
};

export default requireHeader;