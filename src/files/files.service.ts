import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as fs from 'fs/promises';
import * as path from 'path';
import * as uuid from 'uuid';


@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        const fileName = uuid.v4() + ".jpg";
        const filePath = path.resolve(__dirname, '..', 'static');

        try {
            await fs.mkdir(filePath, { recursive: true });

            await fs.writeFile(path.join(filePath, fileName), file.buffer);

            return fileName;

        } catch (err){
            throw new HttpException('write file error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
