export interface IApiTag {
  name: string;
  description?: string;
}

export interface ISwaggerConfig {
  title: string;
  description: string;
  version: string;
  path: string;
  tags?: IApiTag[];
}
