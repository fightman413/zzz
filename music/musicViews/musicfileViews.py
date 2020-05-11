

#获取参数列表
from django.views.decorators.csrf import csrf_exempt

#from music.base import FilesHandler
from music.models import MusicFile


from myblogdjango.filesHandle import FilesHandler
from myblogdjango.base import DataSqlHandler

#音乐
@csrf_exempt
def Upload_File_Handler(request):
	return FilesHandler.Upload_Files_Handler(FilesHandler, MusicFile, request)

#图片
@csrf_exempt
def Upload_Image_Handler(request):
	return FilesHandler.Upload_image_Handler(FilesHandler, MusicFile, request)

#取音乐
@csrf_exempt
def get_File_Handler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler, MusicFile, request, 'getlist')

#取音乐
@csrf_exempt
def get_Image_Handler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler, MusicFile, request, 'getlist')

#删除参数
@csrf_exempt
def delete_file_Handler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler, MusicFile, request, 'delete')

