package services;

import domain.CareTaker;

import java.util.List;

public interface CareGiverService
{
	/**
	 *
	 * <p>Returns a list of caretakers</p>
	 *
	 * @return
	 */
	public List<CareTaker> getCareTakers();
}
