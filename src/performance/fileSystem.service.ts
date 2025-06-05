import { Injectable } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';

@Injectable()
export class FileSystemService {
  private readonly baseDir = path.join(__dirname, '../../../data');

  readJSONFile(id: string) {
    const filePath = path.join(this.baseDir, `${id}.json`);
    if (!fs.existsSync(filePath)) {
      return { message: 'File not found' };
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  writeJSONFile(body: unknown) {
    const id = body.id || Date.now();
    const filePath = path.join(this.baseDir, `${id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
    return { message: 'File saved', id };
  }
}
