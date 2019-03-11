declare module 'react-native-cloud-fs' {
  type Scope = 'visible' | 'hidden';
  export const createFile: (options: {
    targetPath: string,
    content: string,
    scope: Scope
  }) => Promise<any>;


  /////////////

  export const fileExists: (options: {
    targetPath: string,
    scope: Scope
  }) => Promise<boolean>;
  export const listFiles: (options: {
    targetPath: string,
    scope: Scope
  }) => Promise<{
    files: {
      name: string,
      path: string,
      url: string,
      size: number,
      lastModified: Date,
      isDirectory: boolean,
      isFile: boolean
    }[], path: string
  }>;
  export const copyToCloud: (options: {
    sourcePath: { path: string } | { uri: string, 'http-headers'?: { [k: string]: string } }
    targetPath: string,
    mimeType: 'text/plain' | 'application/json' | 'image/jpeg' | null,
    scope: Scope
  }) => Promise<void>;

  export const removeICloudFile: (path: string, next: (err: Error) => void) => void;
  export const replaceFileToICloud: (localPath: string, next: (err: Error, path: string) => void) => void;
  export const replaceFileFromICloud: (iCloudPath: string, next: (err: Error, path: string) => void) => void;
  export const copyFileToICloud: (localPath: string, next: (err: Error, path: string) => void) => void;
  export const copyFileFromICloud: (iCloudPath: string, next: (err: Error, path: string) => void) => void;
  export const moveFileToICloud: (pathToUpload: string, next: (err: Error) => void) => void;
  export const moveFileFromICloud: (iCloudPath: string, next: (err: Error) => void) => void;
  export const downloadUbiquitousPath: (path: string, next: (err: Error, ret: unknown) => void) => void;
  export const itemAttrsOfDirectoryAtICloud: (path: string, next: (err: Error, attrs: unknown) => void) => void;
  export const attributesOfItemAtPath: (path: string, next: (err: Error, attrs: {
    path: string,
    createAt: Date,
    modifyAt: Date,
    isDirectory: boolean,
  }) => void) => void;
  export const contentsAtPath: (path: string, next: (err: Error, contenxt: unknown[]) => void) => void;
  export const contentsOfDirectoryAtPath: (path: string, next: (err: Error, contents: unknown[]) => void) => void;
  export const removeFileAtPath: (path: string, next: (err: Error, exists: boolean) => void) => void;
  export const getICloudToken: (next: (err: Error, token: string) => void) => void;
  export const iCloudDocumentPath: (next: (err: Error, path: string) => void) => void;
  export const documentPath: (next: (err: Error, path: string) => void) => void;
  export const getICloudDocumentURLByLocalPath: (localPath: string, next: (err: Error, url: string) => void) => void;

  export const download: (options: { targetPath: string, scope?: Scope }) => Promise<string>;
  export const upload: (options: { targetPath: string, scope?: Scope }) => Promise<string>;
  export const exists: (options: { targetPath: string, scope?: Scope }) => Promise<boolean>;
}
