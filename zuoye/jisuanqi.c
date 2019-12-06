#include<stdio.h>

int main()
{
	double a,b;
	char c;
	int ture=1;
	while(1){
		printf("这是一个计算器\n");
		printf("请输入想要运算的式子如 a+b \n");
		scanf("%lf%c%lf",&a,&c,&b);
	//通过用户输入的c来决定用户想执行的运算;
	switch(c){
	    //当用户输入+时运算这里
	    case '+':
	        c=a+b;
		printf("%f +%f =%f\n",a,b,a+b);
		break;
	    //当用户输入-时运算这里
	    case '-':
                c=a-b;
                printf("%f - %f =%f\n",a,b,a-b);
                break;

	    //当用户输入*时运算这里
            case '*':
                c=a*b;
                printf("%lf * %lf =%lf\n",a,b,a*b);
                break;

	    //当用户输入/时运算这里
	    case '/':
		//这里判断用户输入的被除数是否为零,为零则提示用户输入错误,不为零则运行.
	        if(b == 0){
		    printf("算数不合理\n");
		} else{
                    c=a/b;
                    printf("%lf / %lf =%lf\n",a,b,a/b);
                    break;
		}
	    default:
		printf("输入不合理\n");
		break;
	}
	return 0;
	}
}
