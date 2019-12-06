#include <stdio.h>

int max(int a,int b)
{
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
int main()
{
    int a1=49;
    int a2=893;
    int one=max(a1,a2);
    printf("%d\n",one);
    return 0;
}
