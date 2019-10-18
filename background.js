/*var cxt = canvas.getContext('2d');
         canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;*/
             function Starry() {//���캯��
                 this.cxt = canvas.getContext('2d');//���� ��������
                 canvas.width = "1518";
                 canvas.height = "750";
                 this.cW = canvas.width;
                 this.cH = canvas.height;
                 this.num = 300;
                 this.data = [];
             }
             Starry.prototype = {
                 //��ʼ�����ӣ�Բ
                 init: function () {
                     //var This = this;
                     for( var i=0;i<this.num;i++ ){
                         this.data[i] = {
                          x: Math.random() * this.cW,
                          y: Math.random() * this.cH,
                             //�˶��뾶
                             cX: Math.random() * 0.5 -0.3,
                             cY: Math.random() * 0.5 -0.3
                        };
                         this.drawCircle( this.data[i].x,this.data[i].y);
                     }
                 },
                 //��������
                 drawCircle: function ( x,y ) {
                     var cxt = this.cxt;
                     cxt.save();//����·��
                     cxt.fillStyle = 'grey';
                     cxt.beginPath();//·����ʼ
                     cxt.arc(x, y, 1, 0, Math.PI * 2, false);//��������
                     cxt.closePath();//·������
                     cxt.fill();//��䷽��
                     cxt.restore();//�ͷ�·��
                 },

                 //��������
                 drawLine: function (x1,y1,x2,y2) {
                     var cxt = this.cxt;
                     var color = cxt.createLinearGradient(x1,y1,x2,y2);
                     color.addColorStop(0.5,'rgba(188,188,188)');
					           //color.addColorStop(0.1,'rgba(67,67,67)');
                     cxt.save();
                     cxt.strokeStyle = color;
                     cxt.beginPath();
                     cxt.moveTo(x1,y1);
                     cxt.lineTo(x2,y2);
                     cxt.closePath();
                     cxt.stroke();
                     cxt.restore();
                 },

                 //�����˶�

                 moveCircle: function (){
                     this.cxt.clearRect(0,0,this.cW,this.cH);
                     //ģ���ƶ�
                     for( var i=0;i<this.num;i++ ){//��һ����
                           this.data[i].x += this.data[i].cX;
                           this.data[i].y += this.data[i].cY;
                           //�߽��ж�
                           if(this.data[i].x > this.cW || this.data[i].x < 0){
                               this.data[i].cX = -this.data[i].cX;
                           }
                           if(this.data[i].y > this.cH || this.data[i].y < 0){
                               this.data[i].cY = -this.data[i].cY;
                           }
                           this.drawCircle( this.data[i].x,this.data[i].y);
                           //���ɶ����ж��Ƿ�����
                            for (var j=i+1;j<this.num;j++ ){//��һ����
                                //�����һ���ߵ�ƽ��+�ڶ����ߵ�ƽ��<=50����
                                if(Math.pow(this.data[i].x - this.data[j].x,2) + Math.pow( this.data[i].y - this.data[j].y,2) <=60 * 60){
                                    this.drawLine(this.data[i].x,this.data[i].y,this.data[j].x,this.data[j].y);
                                }
                                if (Math.pow(this.data[i].x - mouseX,2) + Math.pow( this.data[i].y - mouseY,2) <=150 * 60 ){
                                    this.drawLine(this.data[i].x,this.data[i].y,mouseX,mouseY);
                                }
                            }
                     }
                 }
             };
                //�ж��������
          var mouseX;
           var mouseY;
          canvas.onmousemove = function(e) {
               var ev = event || e;
               mouseX = ev.offsetX;
               mouseY = ev.offsetY;
           };
           var starry = new Starry();
             starry.init();
             setInterval(function () 
             {
                 starry.moveCircle();
             },10);

            /* var mouse = {x: null , y: null};
             var mousex = document.getElementById("mousex");
             mousex.onmousemove = function(e){
              e = e || window.event;
              mouse.x = e.clentX + 10;
              mouse.y = e.clentY;
             };
             function abc(){
              ctx.clearRect(0,0,this.cW,this.cY); 
              DrawLine([mouse].concat[data]);
              RAF(mouse);
            }*/
            