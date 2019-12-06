#include <stdio.h>
int max (int a,int b)
{
    if(a>b){
        return a;
    }else{
    
    return b;}
}
int main()
{
    int a1=1;
    int a2=2;
    int one=max(a1,a2);
    printf("%d",one);
    return 0;

}
