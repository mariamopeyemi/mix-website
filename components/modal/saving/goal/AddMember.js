import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Dialog, TextField, Autocomplete, Stack } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  getAllCoopMember,
  addGoalSavingsMember,
} from "../../../../services/cooperative-admin.js";

const AddMemberModal = ({ toggle, open, viewId }) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  // state to get all planvest members from endpoint to dropdown
  const [member, setMember] = useState([]);
  // state to send selected member from gotten existing mem
  const [postMember, setPostMember] = useState();
  // check if endpoint works
  const [fetchingMembers, setFetchingMembers] = useState(false);

  const handleSelectChange = (e, newVal) => {
    // handles the changed existing member
    setPostMember({ ...postMember, newVal });
  };

  const handleSubmit = async () => {
    // this func handles sending or posting of selected existing mem
    const output = postMember?.newVal?.map((element) => element.id);
    const returnValue = {
      users: output,
    };

    await addGoalSavingsMember(viewId, returnValue);
    toast.success("successfully added to cooperative", { duration: 10000 });
    toggle(!toggle);
  };

  useEffect(() => {
    // this fetches all the existing mem on this cooperative
    (async () => {
      try {
        setFetchingMembers(true);
        const res = await getAllCoopMember();
        setMember(res.data.data);
      } catch (error) {
        toast.error("error adding coop member to savings", { duration: 10000 });
      } finally {
        setFetchingMembers(false);
      }
    })();
  }, []);
  return (
    <Dialog onClose={toggle} open={open}>
      <div className=" pt-[2rem] pb-[3rem] rounded-[8px] md:w-[450px] w-full ">
        <div className=" px-[4rem] flex items-end mb-8 ">
          <p>Add Member</p>
          <span
            onClick={toggle}
            className="text text-[28px] text-black ml-[auto] cursor-pointer"
          >
            &#215;
          </span>
        </div>
        <hr className="w-[105%] mx-[auto] my-[2rem] border-solid border border-gray-200" />

        <Stack
          gap={"3rem"}
          className=" w-[100%] px-[4rem] items-start flex flex-col"
        >
          <div className="w-[100%]">
            {!fetchingMembers ? (
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                onChange={handleSelectChange}
                options={member}
                disableCloseOnSelect
                getOptionLabel={(option) =>
                  option.firstName + " " + option.lastName
                }
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.firstName + " " + option.lastName}
                  </li>
                )}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    sx={{ "& .MuiInputBase-root": { paddingTop: 0 } }}
                    {...params}
                    placeholder="Select members"
                  />
                )}
              />
            ) : (
              <>loading...</>
            )}
            <LoadingButton
              onClick={handleSubmit}
              variant="contained"
              className="mt-[2rem]"
            >
              Create
            </LoadingButton>
          </div>
        </Stack>
      </div>
    </Dialog>
  );
};

export default AddMemberModal;