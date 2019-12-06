#include<stdio.h>

int main()
{   //通过定义两个变量,来确定乘法表的数值 
    int i=0;
    int j=0;
    //通过双重for循环来决定横向与纵向
    for(i=1;i<=9;i++ ){
        for(j=1;j<=i;j++){
            printf("%dX%d=%d\t",i,j,i*j);
        }
	//通过外层for循环来换行
	    printf("\n");
    }//最后输出结束
        return 0;
}
