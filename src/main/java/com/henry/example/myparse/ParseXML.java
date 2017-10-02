package com.henry.example.myparse;

public class ParseXML {

	public String xmlToxsd(String xml) {
		xml = xml.replace("restriction", "xs:restriction");
        xml = xml.replace("element", "xs:element");
        xml = xml.replace("simpleType", "xs:simpleType");
        xml = xml.replace("minInclusive", "xs:minInclusive");
        xml = xml.replace("maxInclusive", "xs:maxInclusive");
		return xml;
	}
	
	public String xsdToxml(String xsd) {
		
		return "";
	}
}
