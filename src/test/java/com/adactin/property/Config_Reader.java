package com.adactin.property;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Config_Reader {

	public static Properties p;

	public Config_Reader() throws Throwable {
		File f = new File(
				"C:\\Users\\user pc\\eclipse-workspace\\Adactin_Project1\\src\\test\\java\\com\\adactin\\property\\Configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}

	public String getBrowser() {
		String browser = p.getProperty("browser");
		return browser;
	}

	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}

}
