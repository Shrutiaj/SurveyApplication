package com.surveyrestapi.models;

public class Ballonburst {
	public static void main(String args) {
		int points[][] = {{10,16},{2,8},{1,6},{7,12}};
		int count = 1;
		int temp[][] = {{points[0][0], points[0][1]}};
		for(int i = 1; i <= points.length; i++) {
			if(!(points[i][0] <= temp[0][0] && temp[0][0] <= points[i][1]))
			{
				count++;
			}
		}
		System.out.println("Min Arrows needed:" + count);
	}
}
