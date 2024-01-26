import { WebPlugin } from '@capacitor/core';

import type { JitsiPlugin } from './definitions';

export class JitsiWeb extends WebPlugin implements JitsiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
