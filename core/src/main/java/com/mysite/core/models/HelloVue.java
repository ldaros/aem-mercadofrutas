/*
 * ***********************************************************************
 * Mercado Frutas LTDA CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Mercado Frutas LTDA.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Mercado Frutas LTDA and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Mercado Frutas LTDA
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Mercado Frutas LTDA.
 * ***********************************************************************
 */

package com.mysite.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code HelloVue} Sling Model used for the {@code mysite//components/hello-vue} component.
 * 
 */
@ConsumerType
public interface HelloVue
    extends ComponentExporter
{


    /**
     * Returns a text value used somewhere in the component
     * 
     * @return String
     * 
     */
    @JsonProperty("text")
    String getText();

}
