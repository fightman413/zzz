from django.conf.urls import url

from Users.UsersViews import UserManagementViews
from music.musicViews import musicViews, musicfileViews
from music.musicViews import SeedView
from django.views.static import serve
from django.conf import settings
urlpatterns = [
	# 参数设置详情
	url(r'^Music/Create/$', musicViews.createMusicHandler, name='createMusicHandler'),
	url(r'^Music/GetList/$', musicViews.getMusicListHandler, name='getMusicListHandler'),
	url(r'^Music/Delete/$', musicViews.deleteMusicListHandler, name='deleteMusicListHandler'),
	url(r'^Music/Update/$', musicViews.updateMusicListHandler, name='updateMusicListHandler'),
	url(r'^Music/Files/$', musicfileViews.Upload_File_Handler, name='Upload_File_Handler'),
	url(r'^Music/Image/$', musicfileViews.Upload_Image_Handler, name='Upload_Image_Handler'),
	url(r'^Music/get_files/$', musicfileViews.get_File_Handler, name='get_File_Handler'),
	url(r'^Music/get_image/$', musicfileViews.get_Image_Handler, name='get_Image_Handler'),
	url(r'^Music/Delete_file/$', musicfileViews.delete_file_Handler, name='delete_file_Handler'),
	url(r'^Seed/Create/$', SeedView.createSeedHandler, name='createSeedHandler'),
	url(r'^Seed/Delete/$', SeedView.deleteSeedListHandler, name='deleteSeedListHandler'),
	url(r'^Seed/Update/$', SeedView.updateSeedListHandler, name='updateSeedListHandler'),
	url(r'^Seed/GetList/$', SeedView.getSeedListHandler, name='getSeedListHandler'),
	url(r'^Seed/Getid/$', SeedView.getSeedIdHandler, name='getSeedIdHandler'),
]