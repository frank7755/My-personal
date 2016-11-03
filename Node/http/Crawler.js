/**
 * Created by Administrator on 2016/11/2.
 */
var http = require('http');
var url = 'http://www.imooc.com/learn/348';
var cheerio = require('cheerio');
var courseData = [];
function filterChapters(html){
  var $ = cheerio.load(html);
  var cheapers = $('.chapter');
  // 希望的数据类型模式
  // [
  // {
  //   cheaperTitle: '' ,
  //   videos:[
  //     title:'',
  //     id:''
  //   ]
  // }
  //   ]
  cheapers.each(function (item){
    var cheaper=$(this);
    var cheaperTitle= cheaper.find('strong').text();
    var videos=cheaper.find('.video').children('li');
    var cheaperData={
      cheaperTitle:cheaperTitle,
      videos:[]
    };
    videos.each(function (item){
      var video=$(this).find('.J-media-item');
      var videoTitle=video.text();
      var id=video.attr('href').split('video/')[1];
      cheaperData.videos.push({
        title:videoTitle,
        id:id
      })
    });
    courseData.push(cheaperData);
  });
  return courseData;

}
function printCourseInfo(courseData){
  courseData.forEach(function (item){
    //item为当前项
    var cheaperTitle=item.cheaperTitle;
    console.log(cheaperTitle);
    item.videos.forEach(function (video){
      console.log('【'+video.id+'】' + video.title );
    })
  })
}
http.get(url, function (res){
  var html = '';
  res.on('data', function (data){
    html += data
  });
  res.on('end', function (){
    filterChapters(html);
    printCourseInfo(courseData);
  })
}).on('error', function (){
  console.log('获取课程数据出错！')
});