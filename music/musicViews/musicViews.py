from django.views.decorators.csrf import csrf_exempt
from music.models import Music

from myblogdjango.base import DataSqlHandler

#添加参数
@csrf_exempt
def createMusicHandler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler,Music, request, 'add')



#删除参数
@csrf_exempt
def deleteMusicListHandler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler, Music, request, 'delete')


#更新文章
@csrf_exempt
def updateMusicListHandler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler,Music, request, 'update')


#获取参数列表
@csrf_exempt
def getMusicListHandler(request):
	try:
		return DataSqlHandler.Data_Handler(DataSqlHandler, Music, request, 'getlist')
	except Exception as e:
		print(e)

