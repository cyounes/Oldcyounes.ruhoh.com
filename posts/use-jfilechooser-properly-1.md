---
title: How to use JFileChooser properly 
date: '2012-11-25'
description: "Tutorial explains how to use JFileChooser on Java/Swing properly
to open/save file" 
categories: [ Tutorials ]
tags: [ Java, Swing, Programming ]
tagline: Part 1

---

In this tutorial, i'll explain you how to use JFileChooser API to make it easy
for the user to choose a file. 

<br />
<p align="center">
![JFileChooser select file to open ]({{ urls.media }}/jfilechooser_open.jpg) 
</p>
<br />
## Create new class :
In the beginning, you need to create a new class file named MyWindow.java contains the
following lines of code:

<pre>
import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class MyWindow extends JFrame {
    
    public MyWindow() {
        initComponents();
    }
    
    private void initComponents() {
        setSize(300, 60);
        setTitle("My Window");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
    }
    
    public static void main(String[] args) {
        MyWindow window = new MyWindow();
        window.setVisible(true);
    }
}

</pre>

if you run the previous lines of java , you will get a new empty window titled: "My Window" with size: (300, 60)

## Add browse button and path textfiled 

now, we have created a new window and need to add a new button named "Browse", when you press this button you will get the filechooser window. after choosing the file and approve selection, the full path of the selected file should be on the textfild

### Add JButton (Browse button);
the code should be as the following:

<pre>

    ... 
    private JButton btn ;
    ...
    private void initComponents() {
        setSize(300, 60);
        setTitle("My Window");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        btn = new JButton("Browse");
        btn.setPreferredSize(new Dimension(100, 20));
        c.add(btn);
    }

</pre>

### Add the JTextField :
In this textfield we will put the full path of the selected file by the user using `JFileChooser` 

<pre>

    ...
    private JButton btn ;
    private JTextField textField;
    ...
    private void initComponents() {
        setSize(300, 60);
        setTitle("My Window");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        btn = new JButton("Browse");
        btn.setPreferredSize(new Dimension(100, 20));
        c.add(btn);
        textField = new JTextField();
        textField.setPreferredSize(new Dimension(160, 20));
        c.add(textField);

    }

</pre>

You should get something like :
<p align="center"> 
![tuto]({{ urls.media }}/tuto_my_window1.jpg)
</p>

## Add action performed to our button:

Now, we need to add the action performed to the browse button, the application must show the filechooser after the user click.

first, we will add two methods:

<pre>
private void btnBrowseActionPerformed(java.awt.event.ActionEvent evt) {
  textField.setText("button pressed");  
}  
</pre>

the second method is where we involve the event to the browse button
<pre>
private void simpleMethod() {
  btn.addActionListener(new java.awt.event.ActionListener() {
    @Override
    public void actionPerformed(java.awt.event.ActionEvent evt) {
      btnBrowseActionPerformed(evt);
    }
  });
}
</pre>

Now you have window with button and text field, when you click on button the program print `"Button Pressed"` on the text field.

######the full code: 

<pre>

import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JTextField;

/**
 *
 * @author cyounes
 */
public class MyWindow extends JFrame {
    
    private JButton btn;
    private JTextField textField;
    private JFileChooser fc;
    
    public MyWindow() {
        initComponents();
        simpleMethod();
    }
    
    private void initComponents() {
        setSize(300, 60);
        setTitle("My Window");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        btn = new JButton("Browse");
        btn.setPreferredSize(new Dimension(100, 20));
        c.add(btn);
        textField = new JTextField();
        textField.setPreferredSize(new Dimension(160, 20));
        c.add(textField);
    }
    
    private void simpleMethod() {
        btn.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnBrowseActionPerformed(evt);
            }
        });
    }
    
    private void btnBrowseActionPerformed(java.awt.event.ActionEvent evt) {
        textField.setText("Button Pressed");
    }    

    public static void main(String[] args) {
        MyWindow window = new MyWindow();
        window.setVisible(true);
    }
}
</pre>

Screen shoot:
<p align="center">
![Button pressed]({{ urls.media  }}/tuto_button_pressed.jpg)
</p>

Now, after get the action performed works correctly, we need just to edit the method that put the text on the text field, to get the `file chooser` opened after clicking the `browse button`.

<pre>

    private void btnBrowseActionPerformed(java.awt.event.ActionEvent evt) {                                               
        if (fc == null) {
            fc = new JFileChooser("$HOME");
        }
        // Show the file chooser and get the value returned.
        int returnVal = fc.showOpenDialog(this);

        // Process the results.
        // Case 1: the user selects file and clicks on open button
        if (returnVal == JFileChooser.APPROVE_OPTION) {
            textField.setText(fc.getSelectedFile().getPath());
        } 
        // Case 2: the user clicks on cancel
        else {
            textField.setText("");
        }

        // Reset the file chooser for the next time it's shown.
        fc.setSelectedFile(null);
        
    }  
</pre>

After clicking `browse button`: 
<p align="center" >
![JFileChooser]({{ urls.media }}/tuto_select_file.jpg )
</p>
after selecting file:
<p align="center" >
![file selected]({{ urls.media }}/tuto_getpath.jpg)
</p>

now you get your `JFileChooser` works correctly. 
The full code on gist:
###### Using Git: 
<pre>
git clone git://gist.github.com/4144967.git
</pre>

###### Using Curl:
<pre>
curl -O https://raw.github.com/gist/4144967/f2be051ef0d66a59fa315a852bb387acf89fe2da/MyWindow.java 
</pre>

###### Copy:
<pre>

import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JTextField;


public class MyWindow extends JFrame {
    
    private JButton btn ;
    private JTextField textField;
    private JFileChooser fc;
    
    public MyWindow() {
        initComponents();
        simpleMethod();
    }
    
    private void initComponents() {
        setSize(300, 60);
        setTitle("My Window");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        btn = new JButton("Browse");
        btn.setPreferredSize(new Dimension(100, 20));
        c.add(btn);
        textField = new JTextField();
        textField.setPreferredSize(new Dimension(160, 20));
        c.add(textField);
    }
    
    private void simpleMethod() {
        btn.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnBrowseActionPerformed(evt);
            }
        });
    }
    
    private void btnBrowseActionPerformed(java.awt.event.ActionEvent evt) {                                               
        if (fc == null) {
            fc = new JFileChooser(".");
        }

        // Show it.
        int returnVal = fc.showOpenDialog(this);

        // Process the results.
        if (returnVal == JFileChooser.APPROVE_OPTION) {
            textField.setText(fc.getSelectedFile().getPath());
        } else {
            textField.setText("");
        }

        // Reset the file chooser for the next time it's shown.
        fc.setSelectedFile(null);
        
    }  
    public static void main(String[] args) {
        MyWindow window = new MyWindow();
        window.setVisible(true);
    }
}
</pre>

## Next Tutorial

In the next tutorial, you will see how to:

+ Add FileFilter , to speciy which extensions you want to open, and prevent to select files that have other extensions.
+ Use JFileChooser to open/save file.
+ Preview selected image on file chooser before opening. 




 

