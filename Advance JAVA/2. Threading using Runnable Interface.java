package main;


/* Creating Thread by Runnable Interface. */
class MyThreadRunnable1 implements Runnable{
	public void run() {
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
		System.out.println("I'm a Thread 1");
	}
}


class MyThreadRunnable2 implements Runnable{
	public void run() {
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
		System.out.println("I'm a Thread 2");
	}
}


/* Main */
public class Main {
	public static void main(String[] args) {
		
		/* Creating object of Threads */
		MyThreadRunnable1 bullet1 = new MyThreadRunnable1();
		Thread gun1 = new Thread(bullet1);	
		
		MyThreadRunnable2 bullet2 = new MyThreadRunnable2();
		Thread gun2 = new Thread(bullet2);	
		
		/* We cannot use start method directly here, bcoz here we are using Runnable Interface */
		
		// So, firstly use : another Threads : Thread gun1 for bullet1
		gun1.start();
		gun2.start();
	}
} 

