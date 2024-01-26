export interface JitsiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
