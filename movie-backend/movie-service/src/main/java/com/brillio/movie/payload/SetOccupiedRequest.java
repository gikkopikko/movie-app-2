package com.brillio.movie.payload;

import java.util.List;

public class SetOccupiedRequest {
private List<Integer> selected;

public List<Integer> getSelected() {
	return selected;
}

public void setSelected(List<Integer> selected) {
	this.selected = selected;
}

}
