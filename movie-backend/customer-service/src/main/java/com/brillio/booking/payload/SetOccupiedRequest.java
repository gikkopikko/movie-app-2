package com.brillio.booking.payload;

import java.util.List;

public class SetOccupiedRequest {
private List<Integer> selected;

public List<Integer> getSelected() {
	return selected;
}

public SetOccupiedRequest() {
	super();
}

public SetOccupiedRequest(List<Integer> selected) {
	super();
	this.selected = selected;
}

public void setSelected(List<Integer> selected) {
	this.selected = selected;
}

}
