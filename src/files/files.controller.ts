import { Controller, Post, Get, Body, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { FileUploadDto } from '../dtos/file.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Files')
@Controller('files')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FilesController {
	@Post('upload')
	@ApiOperation({ summary: 'Upload a file' })
	@ApiBody({ type: FileUploadDto })
	@ApiResponse({ status: 201, description: 'File uploaded.' })
	@Roles('user', 'admin')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: any, @Body() dto: FileUploadDto): any {
		// Handle file upload
		return { message: 'File uploaded', file, dto };
	}

	@Get()
	@ApiOperation({ summary: 'Get all files' })
	@ApiResponse({ status: 200, description: 'List of files.' })
	@Roles('user', 'admin')
	getFiles(): any {
		// List files
		return 'List files';
	}
}
