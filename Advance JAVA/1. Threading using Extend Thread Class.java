package main;


/* Creating Thread by extending Thread Class. */
class MyThread1 extends Thread{
	@Override
	public void run() {
		int i=1;
		while(i<=100) {
			System.out.println("MyThread1 is running");
			i++;
		}
	}
}


class MyThread2 extends Thread{
	@Override
	public void run() {
		int i=1;
		while(i<=100) {
			System.out.println("MyThread2 is running");
			i++;
		}
	}
}

/* Main */
public class Main {
	public static void main(String[] args) {
		
		/* Creating object of Threads */
		MyThread1 t1 = new MyThread1();
		MyThread2 t2 = new MyThread2();
		
		/* Call Strat method to run Thread */
		t1.start();
		t2.start();
	}
} 
