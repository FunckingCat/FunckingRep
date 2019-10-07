import re
import os
import shutil

def defineType(file):#определяет расширение файла
    if os.path.isfile(file):
        reg = '\.(\w+)$'
        try:
            return re.findall(reg, file)[0]
        except:
            return 'unsucsess'
    else:
        return 'directory'

def compileDir(dir, folders = []):#создает список файлов для сортировки
    fileList = list(map(lambda x: dir + x,os.listdir(dir)))
    result = []
    for item in fileList:
        if defineType(item) == 'directory':
            reg ='[-&_\w\s\.\(\)]+$'
            name = re.findall(reg,item)[0]
            if name in folders:
                continue
        result.append(item)
    return result

dir = 'C:\\Users\\SuperUser\\Downloads\\'
folders = ['Apps', 'Pictures', 'Films & Sires', 'ZIP', 'Music', 'Books', 'Documents', 'Unsorted', 'PS & Illustrator'] #папки для сортировки

groups = {#список разделов для сортировки
'Apps':['exe'],
'Documents':['doc', 'docs', 'txt'],
'Pictures':['png', 'jpg', 'svg', 'ico'],
'Films & Sires':['mp4', 'avi', 'mkv'],
'ZIP':['zip', 'rar'],
'Music':['mp3'],
'Books':['pdf'],
'PS & Illustrator':['psd', 'ai'],
}
