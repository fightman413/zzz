from conda_env import env
from sphinx.util import requests

from myblogdjango.base import DataSqlHandler


class FilesHandler(DataSqlHandler):

    def Upload_Files_Handler(self, ModelClass, requestData, extra={}):
        batchList = []
        fileField = ModelClass().get_file_field()
        filePath = ModelClass().get_file_path()
        file = requestData.FILES.getlist('file')
        for item in file:
            exp = {}
            exp['FileName'] = item.name
            exp[fileField] = item
            batchList.append(exp)
        extra['Data'] = batchList
        extra['extraFields'] = {
            'State': 1
        }
        self.Batch_Insert_Data(self, ModelClass, requestData, extra)
        return self.ResponseHandler(self, True, {
            'name': file[0].name,
            'Address': filePath + file[0].name
        }, extra=extra)

    def Upload_image_Handler(self, ModelClass, requestData, extra={}):
        batchList = []
        fileField = ModelClass().get_image_field()
        filePath = ModelClass().get_image_path()
        file = requestData.FILES.getlist('file')
        for item in file:
            exp = {}
            exp['FileName'] = item.name
            exp[fileField] = item
            batchList.append(exp)
        extra['Data'] = batchList
        extra['extraFields'] = {
            'State': 1
        }
        self.Batch_Insert_Data(self, ModelClass, requestData, extra)
        return self.ResponseHandler(self, True, {
            'name': file[0].name,
            'Address': filePath + file[0].name
        }, extra=extra)
#
# class OpenId:
#     def __init__(self, jscode):
#         self.url = 'https://api.weixin.qq.com/sns/jscode2session'
#         self.app_id = env.str('APPID')
#         self.app_secret = env.str('APPSECRET')
#         self.jscode = jscode
#
#     def get_openid(self):
#         url = self.url + "?appid=" + self.app_id + "&secret=" + self.app_secret + "&js_code=" + self.jscode + "&grant_type=authorization_code"
#         res = requests.get(url)
#         try:
#             openid = res.json()['openid']
#             session_key = res.json()['session_key']
#         except KeyError:
#             return 'fail'
#         else:
#             return openid, session_key