<?php

namespace App\Http\Controllers\Restful;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Group;

class GroupController extends Controller
{
    protected $InsertRules  =   [
                                    'name'  =>  ['required','string'],
                                ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $this->data     =   Group::get();
            $this->status   =   'success';
        }catch(Exception $e){
            $this->msg  =   $e->getMessage();
        }
        return $this->ReturnHandle();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Validator  =   $this->MakeValidate($request);
        if($Validator){
            try{
                $result     =   Group::insert(['name'=>$request->name]);
                if(!$result){
                    throw new Exception(trans('common.ServiceError'));
                }
                $this->status   =   'success';
                $this->msg      =   trans('common.InsertSuccess');
            }catch(Exception $e){
                $this->msg  =   $e->getMessage();
            }   
        }
        return $this->ReturnHandle();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}