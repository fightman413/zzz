from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from  sphinx.util import requests

from music.models import Seed, SeedRecorded
from myblogdjango.base import DataSqlHandler

#添加种子参数
@csrf_exempt
def createSeedHandler(request):
	seed = Seed()
	seed.focus_time = request.GET['focus_time']
	seed.interrupt_time = request.GET['interrupt_time']
	seed.singer = request.GET['singer']
	seed.songs_name = '种子'
	seed.interrupt = request.GET['interrupt']
	seed.openid = request.GET['openid']
	# seed.IsDeleted = False
	# seed.CreateTime = '2020-07-06T12:21:12.872Z'
	# seed.UpdateTime= '2020-07-06T12:21:12.872Z'

	# Seed.objects.create(
	# 	focus_time=request.GET['focus_time'],  # 设定字段与传入值进行对应（将会什么内容将会保存在什么字段下。）。
	# 	interrupt_time=request.GET['interrupt_time'],
	# 	singer=request.GET['singer'],
    #     songs_name = '种子',
    #     interrupt = request.GET['interrupt'],
    #     openid = request.GET['openid']
	# )
	# print(request.POST)

	seed.save()
	data_dict = {
		"success": 'success716',
	}
	return JsonResponse(data_dict,json_dumps_params={'ensure_ascii':False},safe=False)

#添加参数
@csrf_exempt
def InitHandler(request):
		return DataSqlHandler.Data_Handler(DataSqlHandler,Seed, request, 'add')

#删除参数
@csrf_exempt
def deleteSeedListHandler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler, Seed, request, 'delete')


#更新文章
@csrf_exempt
def updateSeedListHandler(request):
	return DataSqlHandler.Data_Handler(DataSqlHandler,Seed, request, 'update')


#获取参数列表
@csrf_exempt
def getSeedListHandler(request):
	try:
		return DataSqlHandler.Data_Handler(DataSqlHandler, Seed, request, 'getlist')
	except Exception as e:
		print(e)


#
#获取openid



@csrf_exempt
def getSeedIdHandler(request):
	appid= request.GET["appid"]
	secret= request.GET["secret"]
	jscode = request.GET["code"]

	url = 'https://api.weixin.qq.com/sns/jscode2session' + "?appid=" + appid + "&secret=" + secret + "&js_code=" + jscode + "&grant_type=authorization_code"
	res = requests.get(url)
	try:
		openid = res.json()['openid']
		session_key = res.json()['session_key']
		data_dict = {
			"openid": openid,
			"session_key": session_key,
		}
	except KeyError:
		return 'fail'
	else:
		return JsonResponse(data_dict,json_dumps_params={'ensure_ascii':False},safe=False)