// Create a function that summarizes the schedule in a given object.
// The object will have two keys: startTime and endTime.
// The object's values will be integers that represent 30 minute blocks per value "1" starting from 9am.
// Ex. [{startTime: 3, endTime 4}, {startTime: 4, endTime: 7}]

function mergeSchedule(schedule) {
	// Sort the input array by startTime
	var sortedSchedule = schedule.slice().sort(function(a,b) {
		return a.startTime > b.startTime ? 1 : -1;
	});
	// Initialize the mergedSchedule with the earliest time
	var mergedSchedule = [sortedSchedule[0]];

	for (var i = 0; i < sortedSchedule.length; i++) {
		var currentSchedule = sortedSchedule[i],
			lastMergedSchedule = [sortedSchedule[sortedSchedule.length - 1]];
		if (currentSchedule.startTime <= lastMergedSchedule.endTime) {
			lastMergedSchedule.endTime = Math.max(lastMergedSchedule.endTime, currentSchedule.endTime);
		} else {
			mergedSchedule.push(currentSchedule);
		}
	}
	return mergedSchedule;
}