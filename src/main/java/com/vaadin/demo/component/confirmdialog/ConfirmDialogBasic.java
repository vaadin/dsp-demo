package com.vaadin.demo.component.confirmdialog;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.confirmdialog.ConfirmDialog;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.demo.DemoExporter; // hidden-source-line

@Route("confirm-dialog-basic")
public class ConfirmDialogBasic extends Div {

  private Span status;

  public ConfirmDialogBasic() {
    HorizontalLayout layout = new HorizontalLayout();
    layout.setAlignItems(FlexComponent.Alignment.CENTER);
    layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);

    // tag::snippet[]
    status = new Span();
    status.setVisible(false);

    ConfirmDialog dialog = new ConfirmDialog();
    dialog.setHeader("Apply changes");
    dialog.setText("Are you sure you want to apply the changes you’ve made?");

    dialog.setCancelable(true);
    dialog.addCancelListener(event -> setStatus("Canceled"));

    dialog.setConfirmText("Save");
    dialog.addConfirmListener(event -> setStatus("Applied"));

    Button button = new Button("Open confirm dialog");
    button.addClickListener(event -> {
      dialog.open();
      status.setVisible(false);
    });
    // end::snippet[]

    layout.add(button, status);
    add(layout);
  }

  private void setStatus(String value) {
    status.setText("Status: " + value);
    status.setVisible(true);
  }
  public static class Exporter extends DemoExporter<ConfirmDialogBasic> {} // hidden-source-line
}
