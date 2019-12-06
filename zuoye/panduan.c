#include <stdio.h>

/*
 *首先有一步是提示用户输入年份,然后通过if判断对四取余是否为零
 * */

int main()
{
    //提示用户输入年份;
    printf("该程序为判断是否为闰年");
    printf("请输入要判断的年份\n");
    int a;
    scanf("%d",&a);
    //通过用户的输入使用for循环来判断是否为闰年 
    if((a%4==0 && a%100 !=0 )||a%400==0 ){
        printf("%d为闰年\n",a);
    }else{
        printf("%d不是闰年\n",a);
    }
    return 0;

}
